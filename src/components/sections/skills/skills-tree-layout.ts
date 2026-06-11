import type { SkillNode } from './skills-tree';

export type TreeNode = {
  key: string;
  label: string;
  notions: boolean;
  leaf: boolean;
  depth: number;
  x: number;
  y: number;
  side: -1 | 1;
};

export type TreePath = {
  key: string;
  d: string;
  depth: number;
};

export type TreeLayout = {
  viewX: number;
  width: number;
  height: number;
  trunkX: number;
  trunk: string;
  nodes: TreeNode[];
  paths: TreePath[];
};

const ROW = 40;
const LEVEL = 180;
const CATEGORY_GAP = 48;
const PAD_BOTTOM = 24;
const LABEL_ROOM = 168;
const TRUNK_HEAD = 24;
const WEB_STUB = 36;

const countLeaves = (node: SkillNode): number =>
  node.children?.length ? node.children.reduce((sum, child) => sum + countLeaves(child), 0) : 1;

const subtreeDepth = (node: SkillNode): number =>
  node.children?.length ? 1 + Math.max(...node.children.map(subtreeDepth)) : 1;

const assignSides = (categories: SkillNode[]) => {
  let left = 0;
  let right = 0;
  return categories.map((category) => {
    const leaves = countLeaves(category);
    const side: -1 | 1 = left <= right ? -1 : 1;
    if (side === -1) left += leaves;
    else right += leaves;
    return { category, side };
  });
};

const elbow = (px: number, py: number, cx: number, cy: number, side: -1 | 1): string => {
  const midX = px + side * (LEVEL / 2);
  if (py === cy) return `M ${px} ${py} L ${midX} ${py} L ${cx} ${cy}`;
  return `M ${px} ${py} L ${midX} ${py} L ${midX} ${cy} L ${cx} ${cy}`;
};

const webChildConnector = (px: number, py: number, cx: number, cy: number): string => {
  if (py === cy) return `M ${px} ${py} L ${cx} ${cy}`;
  return `M ${px} ${py} L ${px} ${cy} L ${cx} ${cy}`;
};

const trunkConnector = (
  trunkX: number,
  point: { x: number; y: number },
  side: -1 | 1,
  categoryLabel: string,
): string => {
  if (categoryLabel === 'Web') {
    const endX = trunkX + side * WEB_STUB;
    return `M ${trunkX} ${point.y} L ${endX} ${point.y}`;
  }
  return elbow(trunkX, point.y, point.x, point.y, side);
};

export function computeTreeLayout(categories: SkillNode[]): TreeLayout {
  const sided = assignSides(categories);

  const sideDepth = (side: -1 | 1) =>
    Math.max(
      0,
      ...sided.filter((entry) => entry.side === side).map((entry) => subtreeDepth(entry.category)),
    );

  const leftExtent = sideDepth(-1) * LEVEL + LABEL_ROOM;
  const rightExtent = sideDepth(1) * LEVEL + LABEL_ROOM;
  const halfWidth = Math.max(leftExtent, rightExtent);
  const width = halfWidth * 2;
  const trunkX = halfWidth;

  const nodes: TreeNode[] = [];
  const paths: TreePath[] = [];

  const placeNode = (
    node: SkillNode,
    depth: number,
    side: -1 | 1,
    cursor: { y: number },
    parentKey: string,
  ): { key: string; x: number; y: number } => {
    const key = `${parentKey}/${node.label}`;
    const x =
      node.label === 'Web' && depth === 1
        ? trunkX + side * WEB_STUB
        : trunkX + side * depth * LEVEL;
    let y: number;

    if (node.children?.length) {
      const points = node.children.map((child) => placeNode(child, depth + 1, side, cursor, key));
      y = (points[0]!.y + points[points.length - 1]!.y) / 2;
      for (const point of points) {
        paths.push({
          key: point.key,
          d:
            node.label === 'Web'
              ? webChildConnector(x, y, point.x, point.y)
              : elbow(x, y, point.x, point.y, side),
          depth: depth + 1,
        });
      }
    } else {
      y = cursor.y;
      cursor.y += ROW;
    }

    nodes.push({
      key,
      label: node.label,
      notions: node.level === 'notions',
      leaf: !node.children?.length,
      depth,
      x,
      y,
      side,
    });
    return { key, x, y };
  };

  const startY = TRUNK_HEAD;
  const cursors = { left: { y: startY }, right: { y: startY } };

  for (const { category, side } of sided) {
    const cursor = side === -1 ? cursors.left : cursors.right;
    const point = placeNode(category, 1, side, cursor, 'skills');
    paths.push({
      key: `trunk-${point.key}`,
      d: trunkConnector(trunkX, point, side, category.label),
      depth: 1,
    });
    cursor.y += CATEGORY_GAP;
  }

  const treeBottom = Math.max(cursors.left.y, cursors.right.y) - ROW + PAD_BOTTOM;

  const minNodeX = Math.min(...nodes.map((node) => node.x));
  const maxNodeX = Math.max(...nodes.map((node) => node.x));
  const viewX = Math.min(trunkX, minNodeX) - LABEL_ROOM;
  const viewWidth = Math.max(trunkX, maxNodeX) + LABEL_ROOM - viewX;

  return {
    viewX,
    width: viewWidth,
    height: treeBottom,
    trunkX,
    trunk: `M ${trunkX} 0 L ${trunkX} ${treeBottom}`,
    nodes,
    paths,
  };
}

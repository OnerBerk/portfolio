'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

import { useResponsive } from '@/hooks/use-responsive';

import { SKILLS_TREE, type SkillNode } from './skills-tree';
import { computeTreeLayout, type TreeNode } from './skills-tree-layout';
import styles from './skills-tree.module.scss';

const TITLE_SETTLE = 0.7;
const TRUNK_DRAW = 1.05;
const BRANCH_DRAW = 0.8;
const DEPTH_STAGGER = 0.95;

const layout = computeTreeLayout(SKILLS_TREE);

const treeLayerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: TITLE_SETTLE, duration: 0.01 },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    transition: { delay, duration: BRANCH_DRAW, ease: 'easeInOut' },
  }),
};

const trunkVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { delay: TITLE_SETTLE, duration: TRUNK_DRAW, ease: 'easeInOut' },
  },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.4, ease: 'easeOut' },
  }),
};

const branchDelay = (depth: number) => TITLE_SETTLE + TRUNK_DRAW + (depth - 1) * DEPTH_STAGGER;

const nodeClassName = (node: TreeNode) => {
  if (!node.leaf) return `${styles.label} ${styles.junction}`;
  return `${styles.label} ${node.side === 1 ? styles.leafRight : styles.leafLeft}`;
};

const MobileNode = ({ node }: { node: SkillNode }) => (
  <li>
    <span>
      {node.label}
      {node.level ? <em>(notions)</em> : null}
    </span>
    {node.children?.length ? (
      <ul>
        {node.children.map((child) => (
          <MobileNode key={child.label} node={child} />
        ))}
      </ul>
    ) : null}
  </li>
);

const SkillsTree = () => {
  const reducedMotion = useReducedMotion();
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <motion.div
        className={styles.mobileTree}
        initial={reducedMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {SKILLS_TREE.map((category, index) => (
          <motion.ul
            key={category.label}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: TITLE_SETTLE + index * 0.25, duration: 0.4 },
              },
            }}
          >
            <MobileNode node={category} />
          </motion.ul>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.wrapper}
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        className={styles.treeCanvas}
        style={{ aspectRatio: `${layout.width} / ${layout.height}` }}
        variants={treeLayerVariants}
      >
        <svg
          viewBox={`${layout.viewX} 0 ${layout.width} ${layout.height}`}
          preserveAspectRatio="xMidYMin meet"
          aria-hidden="true"
        >
          <motion.path
            className={styles.trunkPath}
            d={layout.trunk}
            variants={reducedMotion ? pathVariants : trunkVariants}
          />
          {layout.paths.map((path) => (
            <motion.path
              key={path.key}
              className={styles.branchPath}
              d={path.d}
              custom={reducedMotion ? 0 : branchDelay(path.depth)}
              variants={pathVariants}
            />
          ))}
        </svg>
        {layout.nodes.map((node) =>
          node.label === 'Web' ? null : (
            <span
              key={node.key}
              className={nodeClassName(node)}
              style={{
                left: `${((node.x - layout.viewX) / layout.width) * 100}%`,
                top: `${(node.y / layout.height) * 100}%`,
              }}
            >
              <motion.span
                className={styles.labelInner}
                custom={reducedMotion ? 0 : branchDelay(node.depth) + BRANCH_DRAW}
                variants={labelVariants}
              >
                {node.label}
                {node.notions ? <em>(notions)</em> : null}
              </motion.span>
            </span>
          ),
        )}
      </motion.div>
    </motion.div>
  );
};

export default SkillsTree;

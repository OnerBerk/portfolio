import styles from "./pdf-preview.module.scss";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";
import Image from "next/image";
import dynamic from "next/dynamic";

type PdfPrevProps = {
  setOpenPdf: (openPdf: boolean) => void
}

const PdfPrev = ({setOpenPdf}: PdfPrevProps) => {
  const {bgColor, secondaryColor} = useSelector(getTheme);
  const PDFViewer = dynamic(() => import("./my-document"), {
    ssr: false
  });

  return (
    <div className={styles.pdfPreviewMain}
         style={{
           backgroundColor: bgColor
         }}>
      <div className={styles.paper}
           style={{
             border: 1,
             borderStyle: "solid",
             borderColor: secondaryColor
           }}>
        <div className={styles.pdfClose}>
          <Image onClick={() => setOpenPdf(false)} src="/close-red.png" width={15} height={15} />
        </div>
        <div className={styles.pdfPrev}>
          <PDFViewer />
        </div>
      </div>
    </div>
  );
};
export default PdfPrev;
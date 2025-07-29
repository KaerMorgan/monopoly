import type { FieldData } from "../../data";
import { FieldIcon } from "../FieldIcon/FieldIcon";
import { JailField } from "../JailField/JailField";
import styles from './Field.module.css';

type Props = {
  data: FieldData
};

export const Field: React.FC<Props> = ({ data }) => {
  const {id,title,color,hasSideWalk,image,price,subtitle} = data
  const fieldColorStyles = color ? { "--field-color": color } as React.CSSProperties : undefined

  if (hasSideWalk) return <JailField title={title} />

  return (
    <div className={styles.root} data-id={id}>
      {color && (<div className={styles.ribbon} style={fieldColorStyles}></div>)}
      <span className={styles.title}>{title}</span>
      {image && <FieldIcon name={image} />}
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {price && <span className={styles.price}>{price}</span>}
    </div>
  );
};
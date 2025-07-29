import { FieldIcon } from '../FieldIcon/FieldIcon';
import styles from './JailField.module.css';

type Props = {
title: string
};

export const JailField = ({ title }: Props) => {
    const image = 'jail'

  return (
    <div className={styles.root}>
    {image && <FieldIcon name={image} />}
    <span className={styles.title}>{title}</span>
    </div>
  );
};
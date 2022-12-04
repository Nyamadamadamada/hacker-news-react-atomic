interface Props {
  label: string;
  style: string;
}
const Label = ({ label, style }: Props) => {
  return <div className={style}>{label}</div>;
};

export default Label;

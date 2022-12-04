interface Props {
  label: string;
  style: string;
}
const Emphasis = ({ label, style }: Props) => {
  return <em className={style}>{label}</em>;
};

export default Emphasis;

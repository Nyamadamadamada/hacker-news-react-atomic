interface Props {
  label: string;
  style: string;
}
const Header3 = ({ label, style }: Props) => {
  return <h3 className={style}>{label}</h3>;
};
export default Header3;

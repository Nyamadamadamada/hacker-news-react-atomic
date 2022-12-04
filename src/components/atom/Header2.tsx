interface Props {
  label: string;
  style: string;
}
const Header2 = ({ label, style }: Props) => {
  return <h2 className={style}>{label}</h2>;
};
export default Header2;

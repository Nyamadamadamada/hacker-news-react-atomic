interface Props {
  label: string;
  style: string;
}
const Header1 = ({ label, style }: Props) => {
  return <h1 className={style}>{label}</h1>;
};
export default Header1;

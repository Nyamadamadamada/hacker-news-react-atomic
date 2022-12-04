interface Props {
  url: string;
  label: string;
  style: string;
}
const ExternalLink = ({ url, label, style }: Props) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={style}>
      {label}
    </a>
  );
};

export default ExternalLink;

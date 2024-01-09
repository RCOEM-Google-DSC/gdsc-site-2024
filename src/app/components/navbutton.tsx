export default function NavButton(props: {
  className?: string;
  text: string;
  onClick?: () => void;
  icon?: JSX.Element;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`flex text-white items-center h-full px-[10px] text-sm hover:border-b-4 hover:border-main focus:border-b-4 focus:border-main box-content ${props.className}`}
    >
      {props.icon ? <span className="pr-0 text-xl md:pr-3">{props.icon}</span> : null}
      <span className="hidden md:inline">{props.text}</span>
    </button>
  );
}

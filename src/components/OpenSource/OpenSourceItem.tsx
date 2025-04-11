import WebIcon from "@/assets/images/web.svg";
const OpenSourceItem = ({
  name,
  period,
  description,
  webUrl,
}: {
  name: string;
  period: string[];
  description?: string | undefined;
  webUrl?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="mb-1">{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        {description && <span className="whitespace-pre-wrap">{description}</span>}

        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      </div>
    </div>
  );
};

export default OpenSourceItem;

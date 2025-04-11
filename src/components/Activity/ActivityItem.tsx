import GithubIcon from "@/assets/images/github.svg";

const ActivityItem = ({
  name,
  period,
  description,
  repoUrl,
}: {
  name: string;
  period: string[];
  description: string;
  repoUrl: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="mb-1">{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
        {repoUrl && (
          <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
            <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;

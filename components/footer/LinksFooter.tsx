import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";

import { KoFiIcon, OpenCollectiveIcon, GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function LinksFooter() {
  return (
    <div className="flex justify-between w-3/4">
      <Link
        isExternal
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.koFi}
      >
        <KoFiIcon size={20} />
        Support Project on Ko-Fi
      </Link>

      <Link
        isExternal
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.openCollective}
      >
        <OpenCollectiveIcon size={20} />
        Support Project on Open Collective
      </Link>

      <Link
        isExternal
        className={buttonStyles({
          variant: "flat",
          radius: "full",
          color: "success",
        })}
        href={siteConfig.links.github}
      >
        <GithubIcon size={20} />
        Project on GitHub
      </Link>
    </div>
  );
}

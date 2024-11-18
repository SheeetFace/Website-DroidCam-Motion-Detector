import { FC } from "react";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

interface CardHomeProps {
  title: string;
  size: string;
  type: string;
  features: string[];
  downloadUrl: string;
}
const CardHome: FC<CardHomeProps> = ({
  title,
  size,
  type,
  features,
  downloadUrl,
}) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-2">
        <Image
          alt="DroidCam Motion Detector logo"
          height={34}
          src="/logo.ico"
          radius="none"
          width={34}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{type}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="list-disc pl-5 font-extralight font-light">
          {features.map((feature, i) => {
            return <li key={i}> {feature}</li>;
          })}
        </ul>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={downloadUrl}>
          Download the full version for FREE. {size}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardHome;

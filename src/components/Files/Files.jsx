import { Button, Img, Text } from "components";

const Files = ({ title }) => {
  return (
    <div className="flex md:gap-10 gap-[61px] items-center my-0">
      <div className="flex flex-row gap-[7px] items-center">
        <Img
          className="h-[38px] w-[38px]"
          src="images/img_documenttextsvgrepocom.svg"
          alt="documenttextsvg"
        />
        <Text
          className="text-left text-gray-900 text-xl tracking-[0.50px]"
          size="txtNunitoSemiBold20"
        >
          {title}
        </Text>
      </div>
      <div className="flex flex-row gap-[29px] items-start">
        <Button
          className="cursor-pointer space-x-2 flex items-center justify-center md:min-w-[130px] rounded-[25px]"
          leftIcon={
            <Img
              className="h-[30px]"
              src="images/img_eyesvgrepocom.svg"
              alt="eye-svgrepo-com"
            />
          }
          shape="round"
          color="orange_300"
          size="xs"
          variant="outline"
        >
          <div className="hidden md:flex font-bold text-left text-lg tracking-[0.18px]">
            Buka
          </div>
        </Button>
        <Button
          className="cursor-pointer space-x-2 flex items-center justify-center md:min-w-[169px] rounded-[25px]"
          leftIcon={
            <Img
              className="h-[30px]"
              src="images/img_downloadsvgrepocom.svg"
              alt="download-svgrepo-com"
            />
          }
          shape="round"
          color="orange_400"
          size="xs"
          variant="fill"
        >
          <div className="hidden md:flex font-bold text-left text-lg tracking-[0.18px]">
            Download
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Files;

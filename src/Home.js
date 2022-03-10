import CampaignCard from "./components/CampaignCard";

const campaigns = [
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title1",
    raised: 100,
    required: 190,
    createdBy: "Person1",
  },
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title2",
    raised: 80,
    required: 160,
    createdBy: "Person2",
  },
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title3",
    raised: 500,
    required: 500,
    createdBy: "Person3",
  },
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title4",
    raised: 100,
    required: 250,
    createdBy: "Person4",
  },
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title4",
    raised: 100,
    required: 250,
    createdBy: "Person4",
  },
  {
    imgSrc:
      "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Start-A-Fundraiser-Online-In-6-Simple-Steps.png",
    title: "Title4",
    raised: 100,
    required: 250,
    createdBy: "Person4",
  },
];

const Home = () => {
  return (
    <div className="card-container">
      {campaigns.map((campaign) => (
        <CampaignCard
          imgSrc={campaign.imgSrc}
          title={campaign.title}
          raised={campaign.raised}
          required={campaign.required}
          createdBy={campaign.createdBy}
        />
      ))}
    </div>
  );
};

export default Home;

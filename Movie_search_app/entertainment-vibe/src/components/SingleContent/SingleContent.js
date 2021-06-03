import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import styled from 'styled-components';
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (

    <SingleStyled>
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
    </SingleStyled>
  );
};
const SingleStyled = styled.section`
.media {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  font-family: "Roboto", sans-serif;
}

.media:hover {
  background-color: white;
  color: black;
}

@media (max-width: 550px) {
  .media {
    width: 46%;
  }
}

.poster {
  border-radius: 10px;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
}

.subTitle {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
}

`
export default SingleContent;
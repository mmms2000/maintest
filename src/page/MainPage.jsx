import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function MainPage() {
  const navigate = useNavigate();
  const writeButtonHandler = () => {
    navigate("/write");
  };

  const data = [
    {
      id: 1,
      memoryName: "갈릉의 추억",
      date: "2023.08.01",
      img: "https://assets.weforum.org/article/image/responsive_large_webp_ns5Qu2SktVwSiHNWgMsKjEucTivc9vfJYYa7lW63NNA.webp",
    },
    {
      id: 2,
      memoryName: "부산에 가면",
      date: "2023.08.01",
      img: "https://youmatter.world/app/uploads/sites/2/2019/11/travel-cities-man.jpg",
    },
    {
      id: 3,
      memoryName: "서울에서 2박",
      date: "2023.08.01",
      img: "https://www.libertytravel.com/sites/default/files/styles/full_size/public/Groups%20Product%20Tiles-Celebrations-1262x500.jpg?itok=t8BTk2fJ",
    },
    {
      id: 4,
      memoryName: "강원도에서 스키",
      date: "2023.08.01",
      img: "https://assets.weforum.org/article/image/responsive_large_webp_ns5Qu2SktVwSiHNWgMsKjEucTivc9vfJYYa7lW63NNA.webp",
    },
    {
      id: 5,
      memoryName: "제주도 민박",
      date: "2023.08.01",
      img: "https://assets.weforum.org/article/image/responsive_large_webp_ns5Qu2SktVwSiHNWgMsKjEucTivc9vfJYYa7lW63NNA.webp",
    },
  ];

  return (
    <>
      <StLogoContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          로고
        </div>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          <button style={{ height: "42px" }}> search</button>
        </div>
      </StLogoContainer>
      <StGroupWrapper>
        <StButtonWrapper>
          <StWriteButton onClick={writeButtonHandler}> + </StWriteButton>
        </StButtonWrapper>
        {data.map((item) => (
          <StButtonWrapper key={item.id}>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "grey",
                border: "none",
                borderRadius: "12px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition:"center"
              }}
            ></div>
            <div
              style={{
                lineHeight: "1px",
                paddingLeft: "12px",
              }}
            >
              <h4> {item.memoryName}</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                {" "}
                {item.date}
              </p>
            </div>
          </StButtonWrapper>
        ))}
      </StGroupWrapper>
      <StFoterContainer></StFoterContainer>
    </>
  );
}

export default MainPage;

const StLogoContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  height: 60px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StWriteButton = styled.button`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

const StGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StButtonWrapper = styled.div`
  margin-top: 12px;
  width: 40%;
`;

const StFoterContainer = styled.div``;

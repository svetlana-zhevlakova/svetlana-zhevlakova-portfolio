import { ImageResponse } from "next/og";

const LIGHT_BACKGROUND = "#ffffff"; // --s-page-background (light)
const PRIMARY_900 = "#212121"; // --p-primary-color-primary900
const PRIMARY_200 = "#eeeeee"; // --p-primary-color-primary200

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${LIGHT_BACKGROUND} 0%, ${PRIMARY_200} 100%)`,
          padding: "56px",
          color: PRIMARY_900
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%"
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
              fill={PRIMARY_900}
            />
            <path
              d="M16.6254 10.4H25.0599V11.968L18.2451 20.3077H25.0599V21.6086H16.6254V20.0492L23.4143 11.7182H16.6254V10.4Z"
              fill={LIGHT_BACKGROUND}
            />
            <path
              d="M11.8509 16.7495L10.3863 16.5859C9.31796 16.4595 8.49376 16.1407 7.91366 15.6295C7.33355 15.1184 7.0435 14.4263 7.0435 13.5532C7.0435 12.5366 7.41109 11.7325 8.14627 11.1409C8.88145 10.5493 9.88084 10.2535 11.1444 10.2535C12.3621 10.2535 13.3471 10.5666 14.0995 11.1926C14.8519 11.8187 15.2798 12.6802 15.3832 13.7772H13.8841C13.7692 13.0248 13.4878 12.4648 13.0398 12.0972C12.5976 11.7296 11.96 11.5459 11.1272 11.5459C10.3403 11.5459 9.70853 11.7268 9.23181 12.0886C8.76084 12.4447 8.52535 12.9186 8.52535 13.5102C8.52535 13.9926 8.69479 14.3631 9.03366 14.6215C9.37253 14.8743 9.90668 15.0523 10.6361 15.1557L12.049 15.3452C14.4039 15.6152 15.5814 16.6749 15.5814 18.5243C15.5814 19.1791 15.4119 19.7477 15.073 20.2302C14.7342 20.7126 14.2603 21.086 13.6515 21.3502C13.0484 21.6144 12.3391 21.7465 11.5235 21.7465C10.1852 21.7465 9.11407 21.4248 8.30997 20.7815C7.51161 20.1325 7.05499 19.2739 6.94012 18.2055H8.46504C8.70627 19.6989 9.7315 20.4455 11.5407 20.4455C12.2989 20.4455 12.9106 20.2732 13.3758 19.9286C13.8468 19.5783 14.0823 19.1073 14.0823 18.5157C14.0823 17.5048 13.3385 16.9161 11.8509 16.7495Z"
              fill={LIGHT_BACKGROUND}
            />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px"
          }}
        >
          <div
            style={{
              fontSize: 28
            }}
          >
            Svetlana Zhevlakova
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05
            }}
          >
            Web Product Designer
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25
            }}
          >
            Scalable product design for complex B2B and B2B2C systems.
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

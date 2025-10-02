import { Spin } from "antd";

export const LoadingOverlay = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(255,255,255,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000
    }}>
      <Spin size="large" />
    </div>
  );
};

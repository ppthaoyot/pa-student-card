import { Box, Typography } from "@mui/material";

export const MobileFooter = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
                width: "100%",
                maxWidth: "500px",
                height: "40px",
                background: "#079AFF",
                borderRadius: "6px 6px 0 0",
                boxSizing: "border-box",
                position: "fixed",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
            }}
        >
            <Typography
                sx={{
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                }}
            >
                Call Center โทร 1434 (บริการ 24 ชั่วโมง)
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "14px",
                    width: "70px",
                    height: "28px",
                    flex: "none",
                    order: 1,
                    flexGrow: 0,
                }}
            >
                {/* Siam Smile Website Icon */}
                <Box
                    component="a"
                    href="https://www.siamsmile.co.th"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="เว็บไซต์สยามสไมล์"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 28,
                        height: 28,
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "100px",
                        flex: "none",
                        order: 0,
                        flexGrow: 0,
                    }}
                >
                    <Box
                        component="img"
                        src="/favicon.png"
                        alt="Siam Smile Logo"
                        sx={{
                            width: 20,
                            height: 20,
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </Box>

                {/* LINE Icon */}
                <Box
                    component="a"
                    href="https://line.me/R/ti/p/%40siamsmile"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LINE @siamsmile"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 28,
                        height: 28,
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "100px",
                        flex: "none",
                        order: 1,
                        flexGrow: 0,
                    }}
                >
                    <Box
                        component="img"
                        src="/Line-icon.png"
                        alt="LINE Logo"
                        sx={{
                            width: 20,
                            height: 20,
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default MobileFooter;

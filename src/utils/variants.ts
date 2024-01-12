export const fadeIn = (direction: "up" | "down") => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "up" ? -85 : 85,
        },
        visible: { opacity: 1, y: 0}
    }
};


export const scale = () => {
    return {
        hidden: {
            left: 0,
            opacity: 0,
        },
        visible: { scale: 1, opacity: 1 },
    }
};;

import React from "react"

type TwitchEmbedProps = {
    channel: string;
    width?: number | string;
    height?: number | string;
    parent: string;
};

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({
    channel,
    width = 502,
    height = 305,
    parent = ["koodimakkara.fi","www.koodimakkara.fi"],
}) => {
    return (
        <iframe
            src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}`}
            height={height}
            width={width}
            allowFullScreen
        />
    )
}

export default TwitchEmbed;
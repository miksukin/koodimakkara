import React from "react"

type TwitchEmbedProps = {
    channel: string;
    width?: number | string;
    height?: number | string;
};

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({
    channel,
    width = 502,
    height = 305,
}) => {
    return (
        <iframe
            src={`https://player.twitch.tv/?channel=${channel}&parent=koodimakkara.fi`}
            height={height}
            width={width}
            allowFullScreen
        />
    )
}

export default TwitchEmbed;
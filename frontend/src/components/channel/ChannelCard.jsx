
const imageUrl = 'https://cdn.icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.png'

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channel-avatar-container">
            <img src={url || imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChanelHandler
}) => {
    const handleNavigate = () => {
        navigateToChanelHandler(id)
    }
    return (
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{ color: isOnline ? 'green' : 'red' }}>
                 {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}

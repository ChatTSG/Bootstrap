import React from 'react';

const UniorChatContent: React.FC = () => {
    return (
        <div className="chat-content">
            <div className="p-4 p-sm-6">
                <div className="text-center mb-6">
                    <h3 className="mb-1">Welcome to Unior - your presonal digital assistant</h3>
                    <p className="fs-20 lead text-body-secondary">Unleash your creative potential with the power of AI.</p>
                </div>
                <div className="mx-auto" style={{ maxWidth: '512px' }}>
                    {/* Repeated Card Component */}
                    {[
                        { href: 'chat-code-generator.html', icon: 'ri-codepen-fill', color: 'primary', text: 'Code Generator' },
                        { href: 'chat-photo-editing.html', icon: 'ri-image-edit-fill', color: 'info', text: 'Photo Editing' },
                        { href: 'chat-video-editing.html', icon: 'ri-movie-2-fill', color: 'danger', text: 'Video Editing' },
                        { href: 'chat-educational-assistant.html', icon: 'ri-graduation-cap-fill', color: 'success', text: 'Educational Assistant' },
                        { href: 'chat-audio-generator.html', icon: 'ri-mic-line', color: 'warning', text: 'Audio Generator' },
                    ].map((card, index) => (
                        <a key={index} className="d-block text-reset text-decoration-none mb-4" href={card.href}>
                            <div className="card border-0 shadow-lg">
                                <div className="card-body p-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className={`bg-${card.color}-subtle text-${card.color} btn btn-icon me-3`}>
                                                <i className={card.icon}></i>
                                            </div>
                                            <span className="fw-semibold">{card.text}</span>
                                        </div>
                                        <div className="btn btn-icon">
                                            <i className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="d-flex align-items-center mt-6">
                    <a className="btn btn-primary mx-auto" href="#" role="button">Start Talking</a>
                </div>
            </div>
        </div>
    );
}

export default UniorChatContent;

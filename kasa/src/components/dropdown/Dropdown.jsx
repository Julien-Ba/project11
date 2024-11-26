import './dropdown.scss';
import { useState } from 'react';

export default function Dropdown({ title = '', content = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul className='dropdown__content'>
                    {content.map((item) => (
                        <li key={item} className='dropdown__content-item'>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <div className='dropdown__content'>
                <p className='dropdown__content-text'>{content}</p>
            </div>
        );
    };

    return (
        <div className={`dropdown ${isOpen ? 'dropdown--open' : ''}`}>
            <div className='dropdown__header'>
                <p className='dropdown__header-title'>{title}</p>
                <i
                    className='fa-solid fa-chevron-down dropdown__header-icon'
                    onClick={handleClick}
                    role='button'
                    tabIndex='0'
                ></i>
            </div>
            {renderContent()}
        </div>
    );
}

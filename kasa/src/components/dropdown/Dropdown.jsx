import './dropdown.scss';
import { useState } from 'react';

export default function Dropdown({ title = '', content = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }

    function renderContent() {
        if (Array.isArray(content)) {
            return (
                <ul id='dropdown-content' className='dropdown__content'>
                    {content.map((item) => (
                        <li key={item} className='dropdown__content-item'>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        }

        return (
            <div id='dropdown-content' className='dropdown__content'>
                <p className='dropdown__content-text'>{content}</p>
            </div>
        );
    }

    return (
        <div className={`dropdown ${isOpen ? 'dropdown--open' : ''}`}>
            <div className='dropdown__header'>
                <p id='dropdown-title' className='dropdown__header-title'>
                    {title}
                </p>
                <button
                    className='dropdown__header-button'
                    onClick={handleClick}
                    aria-expanded={isOpen}
                    aria-controls='dropdown-content'
                    aria-labelledby='dropdown-title'
                >
                    <i className='fa-solid fa-chevron-up' aria-hidden='true' />
                </button>
            </div>
            {renderContent()}
        </div>
    );
}

'use client'; // Esse arquivo será client-side

import { MapPin, House, Money, Files } from '@phosphor-icons/react';

const iconSet = {
    mapPin: <MapPin size={20} weight="fill" color="#fff" />,
    house: <House size={20} weight="fill" color="#fff" />,
    money: <Money size={20} weight="fill" color="#fff" />,
    files: <Files size={20} weight="fill" color="#fff" />,
};

interface IconWrapperProps {
    iconName: keyof typeof iconSet;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ iconName }) => {
    return iconSet[iconName] || null;
};

export default IconWrapper;

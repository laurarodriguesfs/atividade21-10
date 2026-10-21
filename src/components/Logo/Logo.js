import { Image } from 'react-native';
import styles from './Logo.styles';

const IMAGES = {
  full: {
    dark: require('../../../assets/logo.png'),
    light: require('../../../assets/logo-c.png'),
  },
  mark: {
    dark: require('../../../assets/logo.png'),
    light: require('../../../assets/logo-c.png'),
  },
};

export default function Logo({ size = 'md', variant = 'full', tone = 'dark' }) {
  const style =
    variant === 'mark' ? styles.mark : size === 'sm' ? styles.logoSm : styles.logo;

  return (
    <Image
      source={IMAGES[variant][tone]}
      style={style}
      resizeMode="contain"
    />
  );
}
import Icon from '@react-native-vector-icons/material-design-icons';

interface IconComponentProps extends React.ComponentProps<typeof Icon> {}
const IconComponent: React.FC<IconComponentProps> = ({ ...otherProps }) => {
  return (
    <Icon size={24} {...otherProps} />
  );
};

interface IconProps {
  color?: string
}

const MagnifyIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="magnify" color={color} />
  );
};

const ArrowRightIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="arrow-right-thin" color={color} />
  );
};

const ChevronDownIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="chevron-down" color={color} />
  );
};

const ContentCopyIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="content-copy" color={color} />
  );
};

const DotIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="circle-small" color={color} style={{ marginInline: -6 }} />
  );
};

const RadioCheckedIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="radiobox-marked" color={color} />
  );
};

const RadioUncheckedIcon: React.FC<IconProps> = ({
  color = 'gray',
}) => {
  return (
    <IconComponent name="radiobox-blank" color={color} />
  );
};

export {
  MagnifyIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ContentCopyIcon,
  DotIcon,
  RadioCheckedIcon,
  RadioUncheckedIcon,
};

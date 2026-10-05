function Avatar({ viewer, size = 'lg' }) {
  const Icon = viewer.icon;
  return (
    <span className={`avatar avatar--${size}`} style={{ background: viewer.gradient }} aria-hidden="true">
      <Icon />
    </span>
  );
}

export default Avatar;

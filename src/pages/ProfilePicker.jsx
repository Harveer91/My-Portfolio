import { useNavigate } from 'react-router-dom';
import { profile, viewers } from '../data/profile';
import { useViewer } from '../viewerContext';
import Avatar from '../components/Avatar';

function ProfilePicker() {
  const navigate = useNavigate();
  const { setViewerId } = useViewer();

  const choose = (id) => {
    setViewerId(id);
    navigate(`/profile/${id}`);
  };

  return (
    <main className="picker">
      <span className="picker-brand">{profile.name}</span>
      <h1>Who&apos;s viewing?</h1>
      <p className="picker-subtitle">Pick a profile and I&apos;ll tailor the tour.</p>
      <ul className="picker-grid">
        {viewers.map((viewer) => (
          <li key={viewer.id}>
            <button type="button" className="picker-card" onClick={() => choose(viewer.id)}>
              <Avatar viewer={viewer} />
              <span className="picker-name">{viewer.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProfilePicker;

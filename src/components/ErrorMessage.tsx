import '../styles/components/ErrorMessage.scss';

// images
import ErrorImage from '../assets/images/error.svg';

interface ErrorMessageProps {
  errorMessage: string;
}

function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className={`ErrorMessage__Component`}>
      <div>
        <img src="" alt="Imagen de errror" />
      </div>
      <div>
        <h3>Estamos teniendo problemas una disculpa</h3>
        <p>Pero no te preocupes estamos trabando en eso 🙌</p>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;

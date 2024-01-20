import css from './Options.module.css';

export const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {!isHidden && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

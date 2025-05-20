import { forwardRef } from "react";
import styles from "../../styles/Form.module.css";

export const FormInput = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      value,
      checked,
      onChange,
      placeholder = "",
      error,
      accept,
    },
    ref
  ) => {
    const isCheckbox = type === "checkbox";

    return (
      <div className={styles.inputGroup}>
        {isCheckbox ? (
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name={name}
              checked={checked}
              onChange={onChange}
            />
            {label}
          </label>
        ) : (
          <>
            <label>{label}</label>
            <input
              className={styles.inputField}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              accept={accept}
              ref={ref}
            />
          </>
        )}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
);

export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <select
        className={styles.activitySelection}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

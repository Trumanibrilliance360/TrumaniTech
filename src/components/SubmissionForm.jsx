import React, { useState } from 'react';

const SubmissionForm = () => {
  const [interpretation, setInterpretation] = useState('');
  const [evidenceType, setEvidenceType] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('');
  const [author, setAuthor] = useState('');
  const [sources, setSources] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!interpretation.match(/absolutist/i)) {
      newErrors.interpretation = 'Interpretation must include absolutist language.';
    }
    if (!evidenceType) {
      newErrors.evidenceType = 'Evidence type is required.';
    }
    if (!confidenceLevel) {
      newErrors.confidenceLevel = 'Confidence level is required.';
    }
    if (!author) {
      newErrors.author = 'Author is required.';
    }
    if (!sources) {
      newErrors.sources = 'Sources are required.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission (e.g. send to API)
      console.log({ interpretation, evidenceType, confidenceLevel, author, sources });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Interpretation:</label>
        <textarea value={interpretation} onChange={(e) => setInterpretation(e.target.value)} />
        {errors.interpretation && <p>{errors.interpretation}</p>}
      </div>
      <div>
        <label>Evidence Type:</label>
        <input type="text" value={evidenceType} onChange={(e) => setEvidenceType(e.target.value)} />
        {errors.evidenceType && <p>{errors.evidenceType}</p>}
      </div>
      <div>
        <label>Confidence Level:</label>
        <input type="text" value={confidenceLevel} onChange={(e) => setConfidenceLevel(e.target.value)} />
        {errors.confidenceLevel && <p>{errors.confidenceLevel}</p>}
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        {errors.author && <p>{errors.author}</p>}
      </div>
      <div>
        <label>Sources:</label>
        <input type="text" value={sources} onChange={(e) => setSources(e.target.value)} />
        {errors.sources && <p>{errors.sources}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
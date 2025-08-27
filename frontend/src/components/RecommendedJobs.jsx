import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendations, fetchSkillSuggestions, clearRecommendationErrors } from "../store/slices/recommendationSlice";
import { toast } from "react-toastify";

const RecommendedJobs = () => {
  const [resume, setResume] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { recommendations, skills, loading, error } = useSelector(
    (state) => state.recommendation
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearRecommendationErrors());
    }
  }, [error, dispatch]);

  const handleRecommend = () => {
    if (resume.trim()) {
      dispatch(fetchRecommendations(resume));
    }
  };

  const handleSkills = () => {
    if (resume.trim() && category.trim()) {
      dispatch(fetchSkillSuggestions(resume, category));
    }
  };

  return (
    <div className="recommended">
      <h3>Get Job Recommendations</h3>
      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste your resume text here"
        rows="6"
      />
      <button onClick={handleRecommend} disabled={loading}>
        {loading ? "Loading..." : "Recommend"}
      </button>
      {recommendations && recommendations.length > 0 && (
        <ul>
          {recommendations.map((r, i) => (
            <li key={i}>{`${r.title} - ${(r.score * 100).toFixed(1)}%`}</li>
          ))}
        </ul>
      )}
      <h4>Improve My Résumé</h4>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Desired job category"
      />
      <button onClick={handleSkills} disabled={loading}>
        {loading ? "Checking..." : "Suggest Skills"}
      </button>
      {skills && skills.length > 0 && (
        <ul>
          {skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendedJobs;

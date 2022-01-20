import React, { useState } from 'react';



const AutoCompleteComponent = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    const userInput = e.target.value;
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

  const saveTags = (e) => {
    return filteredSuggestions.length ? (
      setTags([...tags, filteredSuggestions[activeSuggestionIndex]])
    ) : (
      setTags([...tags, e.target.value])
    );
	};

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput("");
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    setTags([...tags, e.target.innerText]);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setFilteredSuggestions([]);
      setInput("");
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      saveTags(e);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    } else if (e.keyCode === 8 && !input.length && tags.length) {
      const tagsArr = [...tags];
      const removedTags = tagsArr.pop();
      setTags(tagsArr);
      setInput("");
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>There is no suggested tag matching your input, add your own tag by hitting ENTER!</em>
      </div>
    );
  };
  
  return (
    <div className="component-body">
      <div>
        <div className="search-bar">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-text'>{tag}</span>
              <span className='tag-close' onClick={() => removeTags(index)}> x </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
          placeholder='Search'
        />
        </div>
      {showSuggestions && input && <SuggestionsListComponent />}
      </div>
    </div>
  );
};

export default AutoCompleteComponent;
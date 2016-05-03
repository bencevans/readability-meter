'use strict'
const countSyllables = require('syllable')
const countWords = require('word-count')

function countSentences (text) {
  return text.split(/\w[.?!](\s|$)/).length
}

/**
 * Measure the reading ease using the Flesch reading-ease test
 * @param  {String} text body of text to be measured
 * @return {Object}      { score: Number, schoolLevel: String, notes: String }
 */
function readingEase (text) {
  let totalWords = countWords(text)
  let totalSentances = countSentences(text)
  let totalSyllables = countSyllables(text)

  // Flesch reading ease alg
  let score = 206.835 -
  (1.015 * (totalWords / totalSentances)) -
  (84.6 * (totalSyllables / totalWords))

  let result = { score }

  // Add interpretation info
  if (score >= 90 && score <= 100) {
    result.schoolLevel = '5th grade'
    result.notes = 'Very easy to read. Easily understood by an average 11-year-old student.'
    return result
  }

  if (score >= 80 && score <= 90) {
    result.schoolLevel = '6th grade'
    result.notes = 'Easy to read. Conversational English for consumers.'
    return result
  }

  if (score >= 70 && score <= 80) {
    result.schoolLevel = '7th grade'
    result.notes = 'Fairly easy to read.'
    return result
  }

  if (score >= 60 && score <= 70) {
    result.schoolLevel = '8th & 9th grade'
    result.notes = 'Plain English. Easily understood by 13- to 15-year-old students.'
    return result
  }

  if (score >= 50 && score <= 60) {
    result.schoolLevel = '10th to 12th grade'
    result.notes = 'Fairly difficult to read.'
    return result
  }

  if (score >= 30 && score <= 50) {
    result.schoolLevel = 'college'
    result.notes = 'Difficult to read.'
    return result
  }

  if (score >= 0 && score <= 30) {
    result.schoolLevel = 'college graduate'
    result.notes = 'Very difficult to read. Best understood by university graduates.'
  }

  return result
}

/**
 * Measure the reading grade of a text with the Flesch–Kincaid Grade Level Formula
 * @param  {String} text Body of text to be measured
 * @return {Number}      Resulting reading grade
 */
function readingGrade (text) {
  let totalWords = countWords(text)
  let totalSentances = countSentences(text)
  let totalSyllables = countSyllables(text)

  // Flesch–Kincaid Grade Level Formula
  let grade = (0.39 * (totalWords / totalSentances)) +
  (11.8 * (totalSyllables / totalWords)) -
  15.59

  return grade
}

module.exports.ease = readingEase
module.exports.grade = readingGrade

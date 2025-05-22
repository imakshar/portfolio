import { OpenSourceContribution } from '../../types/portfolio'

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'React Native Elements',
    description: 'Fixed Bug-1 for React Native Elements library',
    prLink: 'https://github.com/react-native-elements/react-native-elements/pull/1234',
    githubLink: 'https://github.com/react-native-elements/react-native-elements',
    technologies: ['React Native', 'TypeScript', 'Jest'],
    impact: 'Improved component functionality and performance'
  },
  {
    project: 'React Native Elements',
    description: 'Fixed Bug-2 for React Native Elements library',
    prLink: 'https://github.com/react-native-elements/react-native-elements/pull/5678',
    githubLink: 'https://github.com/react-native-elements/react-native-elements',
    technologies: ['React Native', 'TypeScript', 'Documentation'],
    impact: 'Enhanced component reliability and user experience'
  }
]
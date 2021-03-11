import React from 'react'

export const GetLeague = (leagueId) => {
    switch (leagueId) {
      case 140:
        return {
          title: "La Liga",
          color: "#1a4078"
        }
      case 78:
        return {
          title: "Bundesliga",
          color: "#a12525"
        }
      case 39:
        return {
          title: "English Premier League",
          color: "#3d145e"
        }
      case 135:
        return {
          title: "Serie A",
          color: "#122c54"
        }
      default:
        return {
          title: "La Liga",
          color: "#1a4078"
        }
    }
  }
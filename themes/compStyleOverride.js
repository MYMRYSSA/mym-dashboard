/**
 * MUI Components whose styles are override as per theme
 * @param {JsonObject} theme Plain Json Object
 */
export function componentStyleOverrides(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'capitalize',
          borderRadius: '4px'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        },
        rounded: {
          borderRadius: '10px'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors.textDark,
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#002d64',
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: '#002d64',
            backgroundColor: '#002d64',
            '&:hover': {
              backgroundColor: '#e3f2fd'
            },
            '& .MuiListItemIcon-root': {
              color: '#002d64'
            }
          },
          '&:hover': {
            backgroundColor: '#e3f2fd',
            color: '#002d64',
            '& .MuiListItemIcon-root': {
              color: '#002d64'
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#002d64',
          minWidth: '36px',
          marginRight: 10
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 20,
          '& > label': {
            top: '23px',
            left: 0,
            color: theme.grey500,
            '&[data-shrink="false"]': {
              top: '5px'
            }
          },
          '& > div > input': {
            padding: '11.5px 14px !important'
          },
          '& > .MuiOutlinedInput-root > .MuiSelect-select': {
            padding: '11.5px 14px !important',
            width: 120
          },
          '& legend': {
            display: 'none'
          },
          '& fieldset': {
            top: 0
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: theme.colors.grey50,
          borderRadius: '10px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors.primaryLight
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: theme.colors.grey50,
          padding: '15.5px 14px',
          borderRadius: '10px',
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: '10px'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors.grey300
          }
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px'
        },
        valueLabel: {
          color: theme.colors.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors.primaryDark,
          background: theme.colors.primary200
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors.grey700
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 10
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '20px 10px'
        }
      }
    }
  };
}

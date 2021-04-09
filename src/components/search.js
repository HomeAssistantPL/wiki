/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, Button } from "theme-ui";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { darken } from "@theme-ui/color";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { Formik, Form, Field } from "formik";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ closeSearch }) => {
  const data = useStaticQuery(graphql`
    query BooksIndexQuery {
      localSearchPages {
        store
        index
      }
    }
  `);
  const { index, store } = data.localSearchPages;
  const [query, setQuery] = useState(null);
  const results = useFlexSearch(query, index, store);
  const regexForContent = query
    ? new RegExp(query.replace(/\W/g, ""), "gi")
    : null;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, closeSearch);

  const escHelper = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        closeSearch();
      }
    },
    [closeSearch]
  );
  useEffect(() => {
    document.addEventListener("keydown", escHelper, false);
    return () => {
      document.removeEventListener("keydown", escHelper, false);
    };
  }, [escHelper]);
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <div
        sx={{
          position: "fixed",
          zIndex: 50,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          py: 5,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div
          ref={wrapperRef}
          sx={{
            position: "relative",
            width: "auto",
            mx: "auto",
            maxWidth: "3xl",
            maxHeight: "70%",
            boxShadow: "0 8px 16px -4px rgba(0,0,0,.1)",
          }}
        >
          <div
            sx={{
              borderRadius: 10,
              border: "1px solid",
              borderColor: "borderLeft",
              overflowY: "auto",
              height: "70vh",
              p: 4,
              backgroundColor: "background",
            }}
          >
            <Formik
              initialValues={{ query: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setQuery(values.query);
                setSubmitting(false);
              }}
            >
              <Form
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 5,
                }}
                autoComplete="off"
              >
                <AiOutlineSearch
                  sx={{
                    color: "secondary",
                    mr: 3,
                  }}
                />
                <Field
                  innerRef={inputEl}
                  sx={{
                    fontSize: 4,
                    border: "none",
                    "&:focus": {
                      border: "none",
                      outline: "none",
                    },
                    // height: "60%",
                  }}
                  placeholder="Szukaj..."
                  name="query"
                />
              </Form>
            </Formik>
            <div
              sx={{
                mt: 4,
                borderTopColor: "secondary",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
              }}
            >
              <h2>Wyniki</h2>
              {!!results.length && (
                <table>
                  <tbody>
                    {results.map((result) => (
                      <tr key={result.id}>
                        <td
                          sx={{
                            px: 3,
                          }}
                        >
                          <Link
                            as={GatsbyLink}
                            to={`/${result.slug}`}
                            onClick={() => {
                              closeSearch();
                            }}
                          >
                            {result.title}
                          </Link>
                        </td>
                        <td
                          sx={{
                            px: 3,
                          }}
                        >
                          <div
                            sx={{
                              "& > em": {
                                color: "secondary",
                                backgroundColor: "activeLinkBg",
                              },
                            }}
                            dangerouslySetInnerHTML={{
                              __html: result.excerpt.replace(
                                regexForContent,
                                "<em>$&</em>"
                              ),
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

const useOutsideAlerter = (ref, setDialog) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDialog();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setDialog]);
};

export default Search;

export const SearchButton = ({ toggleSearch, sxx }) => (
  <Button
    sx={{
      color: "link",
      display: "flex",
      alignItems: "center",
      opacity: 0.7,
      "&:hover:enabled": {
        textDecoration: "none",
        color: darken("link", 0.25),
      },
      "&:focus": {
        outline: "none",
      },
      ...sxx,
    }}
    onClick={toggleSearch}
  >
    <AiOutlineSearch
      sx={{
        mr: 2,
      }}
    />
    Szukaj...
  </Button>
);

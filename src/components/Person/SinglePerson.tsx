import React from 'react';
import cn from 'classnames';
import { Person } from '../../types';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type Props = {
  person: Person;
  people: Person[];
};

export const SinglePerson: React.FC<Props> = ({ person, people }) => {
  const { slug } = useParams();
  const selectedPerson = people.find(identity => slug === identity.slug);

  let motherExists: string | null = person.motherName;
  let fatherExists: string | null = person.fatherName;
  const isMotherInList = people.find(
    identity => identity.name === person.motherName,
  );
  const isFatherInList = people.find(
    identity => identity.name === person.fatherName,
  );

  if (!motherExists) {
    motherExists = '-';
  }

  if (!fatherExists) {
    fatherExists = '-';
  }

  return (
    <tr
      data-cy="person"
      className={cn({
        'has-background-warning': selectedPerson?.slug === person.slug,
      })}
    >
      <td>
        <NavLink
          to={`/people/${person.slug}`}
          className={cn({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {person.name}
        </NavLink>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      {!isMotherInList ? (
        <td>{motherExists}</td>
      ) : (
        <td>
          <NavLink
            to={`/people/${isMotherInList.slug}`}
            className="has-text-danger"
          >
            {motherExists}
          </NavLink>
        </td>
      )}

      {!isFatherInList ? (
        <td>{fatherExists}</td>
      ) : (
        <td>
          <NavLink to={`/people/${isFatherInList.slug}`}>
            {fatherExists}
          </NavLink>
        </td>
      )}
    </tr>
  );
};

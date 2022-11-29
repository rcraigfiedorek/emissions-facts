import _ from "lodash";
import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { CompanyOutput, DefaultApi } from "../api";

interface CompanyDropdownProps {
  yearFilter?: string;
  selectedCompany: CompanyOutput;
  setSelectedCompany: (companyOutput: CompanyOutput) => void;
  typeaheadClassNames?: string;
}

export const CompanyDropdown: React.FunctionComponent<CompanyDropdownProps> = ({
  yearFilter,
  selectedCompany,
  setSelectedCompany,
  typeaheadClassNames,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<CompanyOutput[]>([]);

  const parsedYearFilter = yearFilter ? _.parseInt(yearFilter) : undefined;

  function handleSearch(query: string): Promise<void> {
    setIsLoading(true);

    return new DefaultApi()
      .apiCompaniesGet(
        1,
        20,
        query || undefined,
        parsedYearFilter,
        "fully_owned_emissions",
        parsedYearFilter
      )
      .then(({ data: { companies } }) => setOptions(companies))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }

  return (
    <AsyncTypeahead
      className={typeaheadClassNames}
      filterBy={() => true}
      id="async-example"
      isLoading={isLoading}
      labelKey="name"
      minLength={3}
      defaultSelected={[selectedCompany]}
      onSearch={handleSearch}
      onChange={(selected) => {
        const newCompany = _.head(selected) as CompanyOutput;
        if (newCompany) {
          setSelectedCompany(newCompany);
        }
      }}
      options={options}
    />
  );
};

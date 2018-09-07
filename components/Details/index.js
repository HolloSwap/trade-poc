import React from 'react';
import * as moment from 'moment';
//import '../../static/assets/scss/details.scss';

const Details = ({ item, fields }) => {
  const updated = timestamp => moment.duration(Date.now() - timestamp).humanize();

  return (
    <div className="detail-section-wrapper">
      {fields.body.map((field, index) => (
        <div className="details-section" key={fields.headers[index]}>
          <span className="label">{fields.headers[index]}</span>
          <span className="value">
            {field === 'timestamp' ? updated(item[field]) : item[field]}
          </span>
        </div>
      ))}
            <style jsx global>{`
              .detail-section-wrapper {
                border-top: 1px solid rgb(201, 201, 201);
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                flex-wrap: wrap;
                margin-bottom: 100px;

                .details-section {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  width: 34%;
                  height: 130px;
                  border-bottom: 1px solid rgb(201, 201, 201);
                  padding: 0;
                  margin: 0;

                  @media (max-width: 768px) {
                    width: 50%;
                    height: 100px;

                    &:not(:nth-child(2n)) {
                      border-right: 1px solid rgb(201, 201, 201);
                    }
                  }

                  @media (min-width: 769px) {
                    &:not(:nth-child(3n)) {
                      border-right: 1px solid rgb(201, 201, 201);
                      width: 33%;
                    }
                  }

                  & > span {
                    color: rgb(63,63,63);
                    margin: 0 auto;
                  }

                  .label {
                    font-size: 18px;
                    font-weight: 400;
                  }

                  .value {
                    font-size: 24px;
                    font-weight: 700;
                  }
                }
              }

            `}</style>
    </div>
  );
};

export default Details;

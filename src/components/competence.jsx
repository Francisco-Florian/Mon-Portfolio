import PropTypes from 'prop-types';

export default function Competence({ icon, competence, image }) {
    return (
        <>
            {image ? (
                <article className="text-center grid justify-items-center">
                    <img src={image} alt={competence} />
                    <h3>{competence}</h3>
                </article>
            ) : (
                <article className="text-center">
                    <i className={icon} />
                    <h3>{competence}</h3>
                </article>
            )}
        </>
    );
}

Competence.propTypes = {
    icon: PropTypes.string,
    competence: PropTypes.string.isRequired,
    image: PropTypes.string,
};

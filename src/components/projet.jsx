import PropTypes from 'prop-types';

export default function Projet({ img, title, description }) {
    return (
        <article className="bg-backGroundCard rounded-xl px-3 py-3">
            <img className="rounded-xl h-48 w-full object-cover" src={img} alt={title} />
            <h3 className="py-2 text-xl">{title}</h3>
            <p className="text-sm">{description}</p>
        </article>
    );
}


Projet.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

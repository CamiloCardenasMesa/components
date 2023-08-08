import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );  

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            { showModal && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo feugiat eros. Aenean placerat et purus non tincidunt. Donec et ligula urna. Mauris et dictum lectus. Quisque dignissim mauris ac vehicula vehicula. Praesent nunc ipsum, interdum in est sit amet, consequat sagittis orci. Suspendisse feugiat felis non velit facilisis volutpat. Sed ligula urna, laoreet at lectus in, malesuada feugiat neque. Phasellus quis nulla at mi rutrum cursus. Integer a arcu lacinia, dignissim mauris ac, pulvinar lacus. In vulputate nibh elit, eu dignissim urna tincidunt nec.
            </p>
        </div>
    );
}

export default ModalPage;
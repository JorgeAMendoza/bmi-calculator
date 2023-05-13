import Input from '../HookForm/Input';

const BMICalculator = () => {
  return (
    <div>
      <p>Enter your details below</p>
      <form>
        <div>
          <label>
            <input type="radio" id="metric" name="units" value="metric" />
            Metric
          </label>
          <label>
            <input type="radio" id="imperial" name="units" value="imperial" />
            Imperial
          </label>
        </div>

        {/* for metric input */}
        <div>
          {/* height */}
          <Input />
          {/* weight */}
          <Input />
        </div>

        {/* for imperial input */}
        <div>
          {/* height */}
          <Input />
          <Input />

          {/* weight */}

          <Input />
          <Input />
        </div>
      </form>
    </div>
  );
};

export default BMICalculator;

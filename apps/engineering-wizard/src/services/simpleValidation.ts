const API_URL = 'http://localhost:8081/api/v1/validate';

const SCL_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4" xmlns:compas="https://www.lfenergy.org/compas/extension/v1">
	<Private type="compas_scl">
		<compas:Labels/>
	</Private>
	<Header id="project"/>
	<Substation name="DEF" desc=""/>
</SCL>`;

const XPATH_RULES = [
  {
    "context": "//SCL/Substation",
    "assertion": "contains(@name, 'ABC')"
  }
];

export async function validateScl() {
  try {
    const formData = new FormData();

    formData.append('validationType', 'XPATH');

    const sclFile = new File([SCL_CONTENT], 'test.scd', { type: 'application/xml' });
    formData.append('sclFile', sclFile);

    formData.append('rulesJson', JSON.stringify(XPATH_RULES));

    formData.append('sclFileExtension', 'SCD');

    console.log('Sending validation request...');

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    console.log('Validation result:', result);

    if (result.valid) {
      console.log('✅ Validation passed - found substation containing "ABC"');
    } else {
      console.log('❌ Validation failed:');
      result.errors.forEach((error, i) => {
        console.log(`  ${i + 1}. ${error.message}`);
      });
    }

    return result;

  } catch (error) {
    console.error('Validation request failed:', error);
    throw error;
  }
}

